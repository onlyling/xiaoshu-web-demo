import { Card, Space } from '@fruits-chain/react-native-xiaoshu'
import { useNavigate } from 'react-router-dom'

const List = () => {
  const navigate = useNavigate()

  return (
    <Space style={{ paddingHorizontal: 12 }} tail head>
      {new Array(10).fill(0).map((_, index) => {
        const id = index.toString()
        return (
          <Card
            key={id}
            title={`title - ${id}`}
            footer={new Date().getTime()}
            onPressHeader={() => {
              navigate(`/details/${id}`)
            }}>
            context
          </Card>
        )
      })}
    </Space>
  )
}

export default List
