import React from 'react'
import { BoxLoading } from './Loading.style'
import { TailSpin } from  'react-loader-spinner'



const Loading = () => {
  return (
    <BoxLoading>
        <TailSpin
            height="80"
            width="80"
            color='#E6533C'
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </BoxLoading>
  )
}

export default Loading