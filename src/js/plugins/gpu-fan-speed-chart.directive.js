angular.module('linuxDash').directive('gpuFanSpeedChart', ['server', function(server) {
  return {
    restrict: 'E',
    scope: {},
    template: ' \
      <line-chart-plugin \
 \
          heading="GPU Fan Speed" \
          module-name="gpu_fan_speed" \
          color="0,255,0" \
 \
          max-value="max" \
          min-value="min" \
          refresh-rate="1500" \
 \
          get-display-value="displayValue" \
          metrics="utilMetrics"> \
      </line-chart-plugin> \
    ',
    link: function(scope) {
      scope.min = 0
      scope.max = 100

      scope.displayValue = function(serverResponseData) {
        return serverResponseData
      }

      scope.utilMetrics = [{
        name: 'Usage',
        generate: function(serverResponseData) {
          return serverResponseData + ' %'
        }
      }]

    }
  }
}])
