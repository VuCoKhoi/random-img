import styled from 'styled-components'

const FlexBox = styled.div`
  ${(props) => ({
    display: 'flex',
    boxSizing: 'border-box',
    minWidth: 'max-context',
    height: 'max-context',
    position: 'relative',
    ...props.styles,
  })}
`

export default FlexBox
