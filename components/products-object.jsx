import Image from "next/image"
const Products = () =>{
  const productList = [
          {
              productId:1,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:2,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:3,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:4,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:5,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:6,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:7,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:8,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
          {
              productId:9,
            productPrice:'$30',
            productColor:'gray',
            productName:'Basic Tee',
            productImage:'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg"'
          },
        ]
       
    return(
       <>
       <ul>
       {productList.map( lists =>(
        <li key={lists.productId}>
          <div className="group relative">
            <Image
            key={lists.productId}
            src={lists.productImage}
            alt={lists.alt}
            width={200}
            height={100}
            />
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              
                <span aria-hidden="true" className="absolute inset-0"></span>
                ${lists.productName}
             
            </h3>

            <p className="mt-1 text-sm text-gray-500">${lists.productColor}</p>
          </div>
                    <button className="bg-green-600 p-1 rounded-full w-20">buy</button>

          <p className="text-sm font-medium text-gray-900">$${lists.productPrice}</p>
        </div>
      </div>
        </li>
       ))}
       </ul>
       </>
       
    )
}
export default Products