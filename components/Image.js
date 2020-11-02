import styled from 'styled-components'

const Image = styled.img`
  ${(props) => ({
    maxWidth: '100%',
    ...props.styles,
  })}
`

export default Image
