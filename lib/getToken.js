import {google} from "googleapis"

export const client = new google.auth.OAuth2(
  `${process.env.NEXT_PUBLIC_CLIENT_ID}`,
  `${process.env.NEXT_PUBLIC_CLIENT_SECRET}`,
  `${process.env.NEXT_PUBLIC_REDIRECT_URI}`,
)


