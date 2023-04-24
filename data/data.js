
let allOrders = "http://localhost:8086/orders"
let saveOrderUrl = "http://localhost:8086/orders"
let findAllOrders = () => {
    return fetch(allOrders, {
        method: "GET",
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        }
    }).then(x => x.json());
};

let saveOrder = (order) => {
    return fetch(saveOrderUrl, {
        method: 'POST',
        mode: "cors",
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            customerId: order.customerid,
            shippingAddress:(
                {
                    state: order.state,
                    city: order.city,
                    postalCode:order.postalCode

                }

            ),
            payment: (
                {
                    method:  order.method,
                    number: order.number,
                    billingAddress:(
                        {
                            state: order.state,
                            city: order.city,
                            postalCode:order.postalCode

                        }

                    )
                }
            ),
            items: [(
                {
                    name:order.name,
                    price: order.price
                }
            )]
        })
    }).then(response =>
    {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    })
        .then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
}

let data = {
    orders: findAllOrders,
    saveOrder: saveOrder
};

export default data;