import React, { useState } from 'react'

const EtForm = ({Track,settrack}) => {
    const [TotalAMT, setTotalAMT] = useState()
    const [InputValue, setInputValue] = useState()
    const total = parseInt(TotalAMT);
    const value = parseInt(InputValue)
    const date = new Date().toLocaleDateString();

    const updateHandler=(e)=>{
        setInputValue(e.target.value)
    }

    const AddHandler=()=>{
        setTotalAMT(total+value);
        setInputValue('');
        settrack([...Track,
            {
                tDate:date,
                tTotal:total,
                tAddedAmount:value,
                tRemovedAmount:'-',
                tBalanceAmount:total+value
            }

        ]);
    }
    const RemoveHandler=()=>{
    setTotalAMT(total-value);
    setInputValue('')
    settrack([...Track,
    {
        tDate: date,
        tTotal: total,
        tAddedAmount: '-',
        tRemovedAmount: value,
        tBalanceAmount: total - value
    }])

}
    return (
        <div className='container my-4'>
            <div className='row'>
                <div className='col-md-6 m-md-auto'>
                    <div className='gutter-gap'>
                        <h1 className='text-center border p-2'>Expense-Tracker-Basic</h1>
                        <form className='border p-2 mt-5'>
                        <h3 className='text-center'>Balance:{TotalAMT}</h3>
                            <div className='mb-3'>
                                <input type='number' placeholder='Enter Amount'className='form-control rounded-0-w-50 m-auto' value={InputValue} onChange={updateHandler}/>
                            </div>
                            <div className='mb-3 text-center'>
                                    <button type='button' className='btn bg-light border rounder-0 me-2' onClick={AddHandler}>ADD</button>
                                    <button type='button' className='btn bg-light border rounder-0' onClick={RemoveHandler}>REMOVE</button>
                            </div>
                        </form>

                    </div>

                </div>

            </div>
        </div>
  )
}

export default EtForm