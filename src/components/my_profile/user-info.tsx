import { Card, CardItem, DatePicker, Icon, Picker, Text } from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { userInfo } from '../style';

export interface Props {}
export interface State {
  selected: string;
  chosenDate: any;
  category: any;
  relationshipSelected: string;
}

export class UserInfo extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      selected: '',
      relationshipSelected: '',
      chosenDate: new Date(),
      category: ['', '환자', '보호자', '의사/약사', '다른질환', '기타'],
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
          <Text>닉네임</Text>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>이메일</Text>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>성별</Text>
          <Picker
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            style={userInfo.pickerWidth}
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange}
          >
            <Picker.Item label='' value='' />
            <Picker.Item label='남자' value='male' />
            <Picker.Item label='여자' value='female' />
          </Picker>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text style={userInfo.datePickerWidth}>생년월일</Text>
          <DatePicker
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date()}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'slide'}
            androidMode={'spinner'}
            placeHolderText='Select Date'
            textStyle={{ color: 'black' }}
            placeHolderTextStyle={{ color: 'black' }}
            onDateChange={this.setDate}
            disabled={false}
          />
          {Platform.OS === 'ios' ? (
            <Ionicons
              name='ios-arrow-down'
              style={{ fontSize: 21, marginRight: 12 }}
            />
          ) : (
            <Ionicons
              name='md-arrow-dropdown'
              style={{ fontSize: 21, marginRight: 13, color: 'gray' }}
            />
          )}
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>질환관계</Text>
          <Picker
            style={userInfo.relationshipPickerWidth}
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            selectedValue={this.state.relationshipSelected}
            textStyle={{ color: 'black' }}
            onValueChange={this.onValueChange}
          >
            {this.state.category.map((val: any) => {
              return <Picker.Item label={val} value={val} key={val} />;
            })}
          </Picker>
        </CardItem>
      </Card>
    );
  }
}
