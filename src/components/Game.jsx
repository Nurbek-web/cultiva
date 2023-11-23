import { Image, Button, Flex } from 'antd';
import { Link } from "react-router-dom";

const Game = () => {
    return <>
        <Image.PreviewGroup
            preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
        }}
        >
        <Image maxwidth={400} src="game-1.png" />
        <br />
        <Image
            maxwidth={200}
            src="game-2.png"
            />
        </Image.PreviewGroup>
        <Flex vertical gap="small" style={{ width: '100%' }}>
            <Link to={"https://ropdxm.itch.io/nis-greenhouse"}>
                <Button type="primary" block>
                    Play Game
                </Button>
            </Link>
        </Flex>

    </>
}

export default Game;