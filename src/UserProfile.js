function UserProfile() {
    let profile = {full_name:"",user_id:0};

    let getData = function() {
        return profile;    // Or pull this from cookie/localStorage
    };

    let setData = function(dataObj) {
        profile = dataObj;
        // Also set this in cookie/localStorage
    };

    return {
        getData: getData,
        setData: setData
    }
}

export default UserProfile;
