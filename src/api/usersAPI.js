import instance from "./instance";

const usersAPI = {
    getUsers: (currentPage = 1,pageSize = 10) => {
        return (
            instance.get(`users?page=${currentPage}&count=${pageSize}`,
                {withCredentials: true})
                .then(response => response.data)
        )
    }
}
export default usersAPI;