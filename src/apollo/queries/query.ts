import { gql } from '@apollo/client/core';

export const GET_SHIPS = gql`
query{
        vehicles {
            title
        description
        icons {
            large
            medium
        }
        level
        type {
            name
    	    title
            icons {
                default
            }
        }
        nation {
            name
            title
            color
            icons {
                small
                medium
                large
            }
        }
    }
}
`;

export interface Vehicle {
    title: string;
    description: string;
    icons: {
      large: string;
      medium: string;
    };
    level: number;
    type: {
      name: string;
      title: string;
      icons: {
        default: string;
      };
    };
    nation: {
      name: string;
      title: string;
      color: string;
      icons: {
        small: string;
        medium: string;
        large: string;
      };
    };
  };