type GreetProps = {
    name: string,
    messageCount?: number,
    isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props // Nếu không truyền vào thì mặc định sẽ bằng 0
    return (
        <div>
            <h2> 
                {
                    props.isLoggedIn 
                    ? `Welcome ${props.name}! You have ${messageCount} unread messages`
                    : 'Welcome Guest'
                }
                
            
            </h2>
        </div>
    )
}

export default Greet
