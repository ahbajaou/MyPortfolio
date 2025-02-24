import React from 'react';
import styled from 'styled-components';

export const Button = (props) => {
  return (
        <>
        <button className='text-xl w-[50%]  h-[75%] md:w-[10%] md:h-[50%] text-[#323232] font-semibold bg-[#FFC567] border-4 border-[#323232] shadow-[6px_6px_0px_#323232]' >
            {props.name}      
        </button>
        </>

  );
}


// export default Button;