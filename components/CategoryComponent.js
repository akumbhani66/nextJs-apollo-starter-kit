import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const CATEGORY_LIST = gql`
  query CATEGORY_LIST($reqNum: String!) {
    redirect(reqNum: $reqNum) {
      _id
      category
    }
  }
`;

function CategoryComponent() {
  return (
    <Query query={CATEGORY_LIST} >
      {({ data, error }) => {
        console.log("CATEGORIES LIST:", data);
        console.log("Error from graphql:", error);
        if (error) {
          return (
            <p>
              Error:
              {error.message}
            </p>
          );
        }
        return (
          <p>
            categories
          </p>
        );
      }}
    </Query>
  );
}

export default CategoryComponent;
