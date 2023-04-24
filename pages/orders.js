
import Layout from "@/components/Layout";
import styles from "@/styles/orders.module.css"
import {useEffect, useState} from "react";
import data from "@/data/data";
export default function Orders() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        data.orders()
            .then((data) => {
                setOrders(data);
                setLoading(false);
                console.log(data);
            })
            .catch((e) => console.log(e));
    }, []);


    if (loading) {
        return (<>
                <div className={styles.container}>
                    <p>LOADING......</p>

                </div>
        </>)
    } else {
        return (
       <>
                <div className={styles.container}>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>Customer id</th>
                            <th>Total</th>
                            <th>City</th>
                            <th>Payment Method</th>
                            <th>Order Placed</th>
                        </tr>
                        </thead>
                        <tbody>

                        {orders.map((o, i) => (
                            <tr key={i}>
                                <td data-label="Customer id">{o.customerId}</td>
                                <td data-label="Total">{o.total}</td>
                                <td data-label="City">{o.shippingAddress.city}</td>
                                <td data-label="Method">{o.payment.method}</td>
                                <td data-label="Order Placed">{o.orderPlaced}</td>

                            </tr>
                        ))}
                        </tbody>
                    </table>


                </div>


       </>
        )
    }
}

