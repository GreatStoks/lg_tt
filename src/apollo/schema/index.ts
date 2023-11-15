export type DateTime = any;

/* The &#x60;BigDecimal&#x60; scalar type represents signed fractional values with arbitrary precision. */
export type BigDecimal = any;

/* The &#x60;BigInt&#x60; scalar type represents non-fractional signed whole numeric values. BigInt can represent arbitrary big values. */
export type BigInt = any;

/* The &#x60;Long&#x60; scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;
/* An object with an ID */
export interface Node {
  id: string; /* The id of the object. */
}


export interface Vehicles {
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
  }
  