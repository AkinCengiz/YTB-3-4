import React from 'react'

function ProductDetails({setFullName}) {
  return (
    <>
    <p id="product-detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit officiis accusantium iste! Cupiditate eius saepe temporibus dignissimos quisquam magni cumque voluptatum expedita in corrupti eos, aspernatur earum omnis quaerat porro assumenda. Nostrum, mollitia minus rerum harum quasi, in voluptatum voluptate iste suscipit dolorem a autem neque libero odio esse tempore!</p>
    <button onClick={() => setFullName("İsim Değişti")}>Fulname Change</button>
    </>
  )
}

export default ProductDetails