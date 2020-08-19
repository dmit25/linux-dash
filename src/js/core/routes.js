function appLoadController($scope, $location, $rootScope) {
  var loadUrl = localStorage.getItem('currentTab') || 'system-status'
  var loadLinuxDash = function () {
    $location.path(loadUrl)
  }

  $rootScope.$on('start-linux-dash', loadLinuxDash)
}

function routesFn($routeProvider) {

  $routeProvider

    .when('/loading', {
      template: [
        '<div class="lead" style="text-align: center;">',
          '<loader></loader>',
          'Loading...',
        '</div>',
      ].join(''),
      controller: ['$scope', '$location', '$rootScope', appLoadController],
    })

    .when('/system-status', {
      template: [
        '<cpu-utilization-chart sortablejs-id="cpu-util-chart"></cpu-utilization-chart> ',
        '<gpu-util-chart sortablejs-id="gpu-util-chart"></gpu-util-chart> ',
        '<gpu-temp sortablejs-id="cpu-temp"></gpu-temp> ',
        '<cpu-temp sortablejs-id="cpu-temp"></cpu-temp> ',
        '<gpu-fan-speed-chart sortablejs-id="gpu-fan-speed-chart"></gpu-fan-speed-chart> ',
        '<gpu-ram-chart sortablejs-id="gpu-ram-chart"></gpu-ram-chart> ',
        '<ram-chart sortablejs-id="ram-chart"></ram-chart> ',
        '<ram-intensive-processes sortablejs-id="ram-intensive-processes"></ram-intensive-processes> ',
        '<cpu-intensive-processes sortablejs-id="cpu-intensive-processes"></cpu-intensive-processes> ',
        '<disk-space sortablejs-id="disk-space"></disk-space> ',
      ].join(''),
    })

    .when('/basic-info', {
      template: [
        '<machine-info sortablejs-id="machine-info"></machine-info>',
        '<memory-info sortablejs-id="memory-info"></memory-info>',
        '<cpu-info sortablejs-id="cpu-info"></cpu-info>',
        '<scheduled-crons sortablejs-id="scheduled-crons"></scheduled-crons>',
        '<cron-history sortablejs-id="cron-history"></cron-history>',
        '<io-stats sortablejs-id="io-stats"></io-stats>',
      ].join(''),
    })

    .when('/network', {
    template: [
        '<upload-transfer-rate-chart sortablejs-id="upload"></upload-transfer-rate-chart> ',
        '<download-transfer-rate-chart sortablejs-id="download"></download-transfer-rate-chart> ',
        '<ip-addresses sortablejs-id="ip-addresses"></ip-addresses> ',
        '<network-connections sortablejs-id="net-cons"></network-connections> ',
        '<arp-cache-table sortablejs-id="arp"></arp-cache-table> ',
        '<ping-speeds sortablejs-id="ping"></ping-speeds> ',
        '<bandwidth sortablejs-id="bandwidth"></bandwidth> ',
      ].join(''),
    })

    .when('/accounts', {
      template: [
        '<server-accounts sortablejs-id="server-accounts"></server-accounts> ',
        '<logged-in-accounts sortablejs-id="logged-in"></logged-in-accounts> ',
        '<recent-logins sortablejs-id="recent"></recent-logins> ',
      ].join(''),
    })

    .when('/apps', {
      template: [
        '<common-applications sortablejs-id="common-applications"></common-applications>',
        '<memcached sortablejs-id="memcached"></memcached>',
        '<redis sortablejs-id="redis"></redis>',
        '<pm2 sortablejs-id="pm2"></pm2>',
      ].join(''),
    })

    .otherwise({
      redirectTo: '/loading'
    })
}

angular.module('linuxDash').config(['$routeProvider', routesFn])
