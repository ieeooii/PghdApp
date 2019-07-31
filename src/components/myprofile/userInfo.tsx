import { Card, CardItem, DatePicker, Icon, Picker, Text } from 'native-base';
import * as React from 'react';
import { userInfo } from '../style';

export interface Props {}
export interface State {
  selected: string;
  chosenDate: any;
}

export class UserInfo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: 'male',
      chosenDate: new Date(),
    };
  }
  setDate(newDate: string) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    this.onValueChange = this.onValueChange.bind(this);
    this.setDate = this.setDate.bind(this);

    return (
      <Card style={userInfo.background}>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>이름</Text>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>이메일</Text>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>닉네임</Text>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>성별</Text>
          <Picker
            mode='dropdown'
            iosHeader='Select your SEX'
            iosIcon={<Icon name='arrow-down' />}
            style={userInfo.pickerWidth}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange}
          >
            <Picker.Item label='남자' value='male' />
            <Picker.Item label='여자' value='female' />
          </Picker>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text style={userInfo.datePickerWidth}>생년월일</Text>
          <DatePicker
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date(2019, 12, 31)}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'slide'}
            androidMode={'spinner'}
            placeHolderText='Select date'
            textStyle={{ color: 'black' }}
            placeHolderTextStyle={{ color: 'skyblue' }}
            onDateChange={this.setDate}
            disabled={false}
          />
        </CardItem>
      </Card>
    );
  }
}
