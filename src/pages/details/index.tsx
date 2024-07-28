import { Button, Popup, Result } from '@fruits-chain/react-native-xiaoshu'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams<{ id: string }>()
  const [visible, setVisible] = useState(false)

  return (
    <>
      <div>
        id -={'>'} {id}
      </div>

      <Button
        type="hazy"
        onPress={() => {
          setVisible(true)
        }}>
        show popup
      </Button>

      <Popup visible={visible} position="bottom" round>
        <Popup.Header
          title="弹窗"
          onClose={() => {
            setVisible(false)
          }}
        />

        <Result
          status="success"
          title="恭喜答对了"
          subtitle={`嘿嘿嘿\n啊哈哈`}
        />
      </Popup>
    </>
  )
}

export default Details
