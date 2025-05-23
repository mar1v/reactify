import moment from "moment";



export const rules = {
    required: (message: string) => ({
        required: true,
        message,
    }),
    isDateAfter: (message: string) => ({
        validator(_: any, value: moment.Moment | null) {
            if (value?.isSameOrAfter(moment())) {
                return Promise.resolve();
            }
            return Promise.reject(new Error(message));
        },
    }),
}
