export default {
    //dashbaord activity
    dashboardUserRequest: (state) => state.dashboardUserRequest,
    activityTimelineData: (state) => state.activityTimelineData,
    alertsByTypeData: (state) => state.alertsByTypeData,
    screeningHitByTypeData: (state) => state.screeningHitByTypeData,
    //dashbaord reporting
    customerByAge: (state) => state.customerByAge,
    customersByGender: (state) => state.customersByGender,
    customersByWorkType: (state) => state.customersByWorkType,
    customersAccountByMonth: (state) => state.customersAccountByMonth,
    customersByIndustry: (state) => state.customersByIndustry,
    customersByNationality: (state) => state.customersByNationality,
}
