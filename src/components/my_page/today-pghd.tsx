import { Button, Container, Form, Text } from 'native-base';
import * as React from 'react';
import { TextInput } from 'react-native';
import { todayPghd } from '../style';

const styles = todayPghd;

interface IState {
  str?: string;
}
interface IProps {}

export class TodayPghd extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = { str: '' };
  }

  static navigationOptions = {
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        style={styles.upIoadButton}
      >
        <Text style={styles.buttonTextColor}>등록</Text>
      </Button>
    ),
  };

  render() {
    return (
      <Container>
        <Form style={{ flex: 1 }}>
          <TextInput
            style={styles.textInput}
            placeholder='오늘의 건강 상태와 운동량을 기록해보세요.'
            editable={true}
            multiline={true}
            autoFocus={true}
            onChangeText={str => this.setState({ str })}
            value={this.state.str}
          />
        </Form>
      </Container>
    );
  }
}
