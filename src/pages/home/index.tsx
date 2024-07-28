import {
  Button,
  Dialog,
  Space,
  Toast,
} from '@fruits-chain/react-native-xiaoshu'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      12
      <Space>
        <Button
          type="primary"
          onPress={() => {
            Dialog({
              title: '嘿嘿',
              message: '文案',
              onOpened: () => {
                Toast.success('ss')
              },
            })
          }}>
          按钮
        </Button>
        <Link to="/user-center">Go User Center</Link>
        <Link to="/list">Go List</Link>
      </Space>
    </>
  )
}

export default Home
