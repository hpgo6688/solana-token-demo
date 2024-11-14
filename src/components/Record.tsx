import type React from 'react'
interface IProps {

}
const Record: React.FC<IProps> = props => {
  const records = [
    {label: "create mint", link:  "https://explorer.solana.com/tx/3LPVQRVTXCaRQZzmhoiv8zLH3LiX5CmPtE1cFb5HJzii6pTEH7PL1fgXBmeYkSWz7W37T82h7ag2JDXZ7pYgP52w?cluster=devnet"},
    {label: "token account", link:  "https://explorer.solana.com/tx/DmqETGw65vKSxWsahZMB1KXsAYmFea5D1bLZbRNsMkSL1DTBZvg2ipjrc68WsG6CcCiGZMakLwdEXkhMxiJfnL1?cluster=devnet"},
    {label: "token mint ", link:  "https://explorer.solana.com/tx/2P5rM2M3YuQvdUqzSrw5iXCwb2rPeanmw3yArZ263cA75rSZsjToCybkeEH7jWhm1BPZtH3PZRobvEkjdH5k2TJm?cluster=devnet"},
  ]
  return (
    <div>
      {records.map(item => <p  key={item.link}> <a target="_blank" href={item.link}>{ item.label} , {item.link}</a> </p>)}
    </div>
  )
}


export default Record