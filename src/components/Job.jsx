import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'

const Job = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}
    >
      <Col className='pe-0' xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={1}>
        <Button className='btn btn-light' onClick={() => {
          // qui dovremmo azionare la generazione di un nuovo stato
          // --> "dispatchando" un'action
          dispatch({
            type: 'ADD_TO_FAVOURITES',
            payload: data.company_name,
            // il type rappresenta il "nome" della action
            // il payload rappresenta il "contenuto" della action
          })
        }} type='button'>❤️</Button>
      </Col>
      <Col xs={1}>
        <Button className='btn btn-light' onClick={() => {
          // qui dovremmo azionare la generazione di un nuovo stato
          // --> "dispatchando" un'action
          dispatch({
            type: 'DELETE_FROM_FAVOURITES',
            payload: data.company_name,
            // il type rappresenta il "nome" della action
            // il payload rappresenta il "contenuto" della action
          })
        }} type='button'>🔥</Button>
      </Col>
      <Col xs={6}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  )
}

export default Job
