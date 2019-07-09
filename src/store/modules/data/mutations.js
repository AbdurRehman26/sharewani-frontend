export default {
    setbarChartData(state, payload) {
        //dashbaord activity
        state.dashboardUserRequest = payload
        state.activityTimelineData = payload
        state.alertsByTypeData = payload
        state.screeningHitByTypeData = payload
        //dashboard reporting
        state.customerByAge = payload
        state.customerByGender = payload
        state.customersByWorkType = payload
        state.customersAccountByMonth = payload
        state.customersByIndustry = payload
        state.customersByNationality = payload
    },
}
