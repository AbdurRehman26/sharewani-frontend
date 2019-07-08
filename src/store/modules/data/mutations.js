export default {
    setbarChartData(state, payload) {
        state.dashboardUserRequest = payload
        state.activityTimelineData = payload
        state.alertsByTypeData = payload
        state.screeningHitByTypeData = payload
    },
}
