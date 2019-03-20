
export default class ColorService {
    public getAllColors(): Promise<Response> {
        return fetch("/api", {
            method: "GET",
            headers: {
                "content-type": "application/json", 
                accept: "application/json"
            }
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        }) 
    }

    public getColor(id: String): Promise<Response> {
        return fetch(`/api/${id}`, {
            method: "GET",
            headers: {
                "content-type": "application/json", 
                accept: "application/json"
            }
        })
        .then((res) => {
            return res.json();
        })
        .catch((err) => {
            return err;
        }) 
    }
}