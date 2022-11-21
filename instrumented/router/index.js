function cov_13p5eh11mb() {
  var path = "C:\\Anil\\Vue\\poc1\\src\\router\\index.js";
  var hash = "bf8ec4b418858c9e1a3fb76d0c03e74b24f7fbcc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Anil\\Vue\\poc1\\src\\router\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 0
        },
        end: {
          line: 5,
          column: 18
        }
      },
      "1": {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 21,
          column: 1
        }
      },
      "2": {
        start: {
          line: 19,
          column: 21
        },
        end: {
          line: 19,
          column: 85
        }
      },
      "3": {
        start: {
          line: 23,
          column: 15
        },
        end: {
          line: 27,
          column: 2
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 19,
            column: 16
          }
        },
        loc: {
          start: {
            line: 19,
            column: 21
          },
          end: {
            line: 19,
            column: 85
          }
        },
        line: 19
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "bf8ec4b418858c9e1a3fb76d0c03e74b24f7fbcc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_13p5eh11mb = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_13p5eh11mb();
import Vue from 'vue';
import VueRouter from 'vue-router';
import HomeView from '../views/HomeView.vue';
cov_13p5eh11mb().s[0]++;
Vue.use(VueRouter);
const routes = (cov_13p5eh11mb().s[1]++, [{
  path: '/',
  name: 'home',
  component: HomeView
}, {
  path: '/posts',
  name: 'posts',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => {
    cov_13p5eh11mb().f[0]++;
    cov_13p5eh11mb().s[2]++;
    return import(
    /* webpackChunkName: "about" */
    '../views/PostsView.vue');
  }
}]);
const router = (cov_13p5eh11mb().s[3]++, new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}));
export default router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJWdWUiLCJWdWVSb3V0ZXIiLCJIb21lVmlldyIsInVzZSIsInJvdXRlcyIsInBhdGgiLCJuYW1lIiwiY29tcG9uZW50Iiwicm91dGVyIiwibW9kZSIsImJhc2UiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9VUkwiXSwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndnVlLXJvdXRlcidcbmltcG9ydCBIb21lVmlldyBmcm9tICcuLi92aWV3cy9Ib21lVmlldy52dWUnXG5cblZ1ZS51c2UoVnVlUm91dGVyKVxuXG5jb25zdCByb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnLycsXG4gICAgbmFtZTogJ2hvbWUnLFxuICAgIGNvbXBvbmVudDogSG9tZVZpZXdcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9zdHMnLFxuICAgIG5hbWU6ICdwb3N0cycsXG4gICAgLy8gcm91dGUgbGV2ZWwgY29kZS1zcGxpdHRpbmdcbiAgICAvLyB0aGlzIGdlbmVyYXRlcyBhIHNlcGFyYXRlIGNodW5rIChhYm91dC5baGFzaF0uanMpIGZvciB0aGlzIHJvdXRlXG4gICAgLy8gd2hpY2ggaXMgbGF6eS1sb2FkZWQgd2hlbiB0aGUgcm91dGUgaXMgdmlzaXRlZC5cbiAgICBjb21wb25lbnQ6ICgpID0+IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImFib3V0XCIgKi8gJy4uL3ZpZXdzL1Bvc3RzVmlldy52dWUnKVxuICB9XG5dXG5cbmNvbnN0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICBtb2RlOiAnaGlzdG9yeScsXG4gIGJhc2U6IHByb2Nlc3MuZW52LkJBU0VfVVJMLFxuICByb3V0ZXNcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlclxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBZVk7Ozs7Ozs7OztBQWZaLE9BQU9BLEdBQVAsTUFBZ0IsS0FBaEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsT0FBT0MsUUFBUCxNQUFxQix1QkFBckI7O0FBRUFGLEdBQUcsQ0FBQ0csR0FBSixDQUFRRixTQUFSO0FBRUEsTUFBTUcsTUFBTSw2QkFBRyxDQUNiO0VBQ0VDLElBQUksRUFBRSxHQURSO0VBRUVDLElBQUksRUFBRSxNQUZSO0VBR0VDLFNBQVMsRUFBRUw7QUFIYixDQURhLEVBTWI7RUFDRUcsSUFBSSxFQUFFLFFBRFI7RUFFRUMsSUFBSSxFQUFFLE9BRlI7RUFHRTtFQUNBO0VBQ0E7RUFDQUMsU0FBUyxFQUFFLE1BQU07SUFBQTtJQUFBO0lBQUE7SUFBTztJQUFnQyx3QkFBdkM7RUFBZ0U7QUFObkYsQ0FOYSxDQUFILENBQVo7QUFnQkEsTUFBTUMsTUFBTSw2QkFBRyxJQUFJUCxTQUFKLENBQWM7RUFDM0JRLElBQUksRUFBRSxTQURxQjtFQUUzQkMsSUFBSSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFGUztFQUczQlQ7QUFIMkIsQ0FBZCxDQUFILENBQVo7QUFNQSxlQUFlSSxNQUFmIn0=