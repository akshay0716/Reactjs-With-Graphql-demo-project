import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(
      record: {
        name: "Hotdog"
        supplierID: 1
        categoryID: 1
        quantityPerUnit: "20"
      }
    ) {
      record {
        name
      }
    }
  }
`;

function Mutation() {
  const [careteProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "hello",
        quantityPerUnit: "asdasd",
      },
    }
  );

  return (
    <div>
      <button onClick={() => careteProduct()}>Create Product</button>
    </div>
  );
}

export default Mutation;
