
import Layout from "@/components/Layout";
import { useForm } from 'react-hook-form';
import styles from "@/styles/NewOrder.module.css"
import data from "@/data/data";
export default function Neworder() {
    const { register, handleSubmit, errors, reset } = useForm();
    console.log("AAAAAAAAAAAAAAAAAAAAA");
    let save = async (values) => {

        console.log(values);
        const response = await data.saveOrder(values);
        console.log(response);
        if(response != null){
            reset();

        }

    }
    return (
        <Layout>

            <div className={styles.container}>
                <h3>Add new order</h3>
                <form action={"#"} onSubmit={handleSubmit(save)}>
                <div className={styles.inputbox}>
                    <label htmlFor={"customerid"}> Your customer id</label>
                    <input type={"text"} id={"customerid"} name={"customerid"}
                        {...register('customerid',
                            {required: true,
                                message: 'please enter a name' })}
                        />

                </div>

                <div className={styles.inputbox}>
                    <label htmlFor={"state"}>State</label>
                    <input type={"text"} id={"state"} name={"state"}
                           {...register('state',
                               {required: true,
                                   message: 'please enter a state   ' })}
                    />

                </div>
                <div className={styles.inputbox}>
                    <label htmlFor={"city"}>City</label>
                    <input type={"text"} id={"city"} name={"city"}
                           {...register('city',
                               {required: true,
                                   message: 'please enter a city' })}
                    />

                </div>
                <div className={styles.inputbox}>
                    <label htmlFor={"postalcode"}>Postal Code</label>
                    <input type={"text"} id={"postalcode"} name={"postalcode"}
                           {...register('postalcode',
                               {required: true,
                                   message: 'please enter a postalcode' })}
                    />

                </div>
                <div className={styles.inputbox}>
                    <label htmlFor={"method"}>Payment method</label>
                    <input type={"text"} id={"method"} name={"method"}
                           {...register('method',
                               {required: true,
                                   message: 'please enter a method' })}
                    />

                </div>
                <div className={styles.inputbox}>
                    <label htmlFor={"number"}>Payment number</label>
                    <input type={"text"} id={"number"} name={"number"}
                           {...register('number',
                               {required: true,
                                   message: 'please enter a number' })}
                    />

                </div>

                <div className={styles.inputbox}>
                    <label htmlFor={"name"}>Item name</label>
                    <input type={"text"} id={"name"} name={"name"}
                           {...register('name',
                               {required: true,
                                   message: 'please enter a name' })}
                    />

                </div>
                <div className={styles.inputbox}>
                    <label htmlFor={"price"}>Item price</label>
                    <input type={"text"} id={"price"} name={"price"}
                           {...register('price',
                               {required: true,
                                   message: 'please enter a price' })}
                    />

                </div>

                <div className={styles.submitbuttondiv}>
                    <input type={"submit"} value={"save"} className={styles.btnsubmit} ></input>
                </div>
                </form>
            </div>



        </Layout>
    )
}