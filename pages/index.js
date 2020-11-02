import React from 'react'
import FlexBox from '../components/FlexBox'
import Image from '../components/Image'

export const config = {
  amp: 'hybrid',
  // unstable_runtimeJS: false, //for build project dont need js
}

export async function getServerSideProps() {
  const result = await fetch('http://localhost:5000/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query: '{ image { link } }' }),
  })

  const data = await result.json()

  return { props: { data: data.data } }
}

export default function Index({ data }) {
  return (
    <FlexBox
      styles={{ width: '100%', height: '100%', justifyContent: 'center' }}>
      <Image src={data.image.link} />
    </FlexBox>
  )
}
