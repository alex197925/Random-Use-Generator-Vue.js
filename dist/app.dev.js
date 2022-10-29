"use strict";

/** @format */
var app = Vue.createApp({
  data: function data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg"
    };
  },
  methods: {
    getUser: function getUser() {
      var res, _ref, results;

      return regeneratorRuntime.async(function getUser$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(fetch("https://randomuser.me/api/"));

            case 2:
              res = _context.sent;
              _context.next = 5;
              return regeneratorRuntime.awrap(res.json());

            case 5:
              _ref = _context.sent;
              results = _ref.results;
              console.log(results);
              this.firstName = results[0].name.first;
              this.lastName = results[0].name.last;
              this.email = results[0].email;
              this.gender = results[0].gender;
              this.picture = results[0].picture.large;

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }
});
app.mount("#app");