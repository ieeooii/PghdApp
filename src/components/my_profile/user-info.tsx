import {
  Card,
  CardItem,
  DatePicker,
  Icon,
  Input,
  Picker,
  Text,
} from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { userInfo } from '../style';

export interface Props {
  email: string;
  nickname: string;
  type: string;
  birthDate: string;
  relationship: string;
}
export interface State {
  selected: string;
  chosenDate: any;
  relationshipSelected: string;
}

export class UserInfo extends React.Component<Props, State> {
  public props: any;

  constructor(props: any) {
    super(props);
    this.state = {
      selected: '',
      relationshipSelected: '',
      chosenDate: new Date(),
    };
  }
  setDate(newDate: string) {
    this.setState({ chosenDate: newDate });
  }

  selectedOnValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  relationshipOnValueChange(value: string) {
    this.setState({
      relationshipSelected: value,
    });
  }

  render() {
    this.selectedOnValueChange = this.selectedOnValueChange.bind(this);
    this.relationshipOnValueChange = this.relationshipOnValueChange.bind(this);
    this.setDate = this.setDate.bind(this);

    return (
      <Card transparent style={userInfo.background}>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>닉네임</Text>
          <Input
            selectionColor={'white'}
            style={{ marginLeft: 40 }}
            value={this.props.rootState.nickname}
          />
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>이메일</Text>
          <Input
            selectionColor={'white'}
            style={{ marginLeft: 40 }}
            value={this.props.rootState.email}
          />
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>성별</Text>
          {/* {this.props.rootState.성별 === null ? null : (
            <Input
              selectionColor={'white'}
              style={{ marginLeft: 40 }}
              value={this.props.rootState.성별}
            />
          )} */}
          <Picker
            placeholder='Select...'
            placeholderStyle={{ color: '#445870' }}
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            style={userInfo.pickerWidth}
            selectedValue={this.state.selected}
            onValueChange={this.selectedOnValueChange}
          >
            <Picker.Item label='' value='' />
            <Picker.Item label='남자' value='male' />
            <Picker.Item label='여자' value='female' />
          </Picker>
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text style={userInfo.datePickerWidth}>생년월일</Text>
          {this.props.rootState.birthDate === '' ? null : (
            <Input
              selectionColor={'white'}
              style={{ marginLeft: 40 }}
              value={this.props.rootState.birthDate}
            />
          )}
          <DatePicker
            minimumDate={new Date(1900, 1, 1)}
            maximumDate={new Date()}
            locale={'en'}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={'slide'}
            androidMode={'spinner'}
            placeHolderText='Select...'
            placeHolderTextStyle={{
              color: '#445870',
              marginRight: 20,
            }}
            onDateChange={this.setDate}
            disabled={false}
          />
          {Platform.OS === 'ios' ? (
            <Ionicons
              name='ios-arrow-down'
              style={{ fontSize: 21, right: 5 }}
            />
          ) : (
            <Ionicons
              name='md-arrow-dropdown'
              style={{ fontSize: 21, right: 20, color: 'gray' }}
            />
          )}
        </CardItem>
        <CardItem bordered style={userInfo.textHeight}>
          <Text>질환관계</Text>
          {this.props.rootState.relationship === '' ? null : (
            <Input
              selectionColor={'white'}
              style={{ marginLeft: 40 }}
              value={this.props.rootState.relationship}
            />
          )}
          <Picker
            placeholder='Select...'
            placeholderStyle={{ color: '#445870' }}
            style={userInfo.relationshipPickerWidth}
            mode='dropdown'
            iosIcon={<Icon name='arrow-down' />}
            selectedValue={this.state.relationshipSelected}
            onValueChange={this.relationshipOnValueChange}
          >
            <Picker.Item label='' value='' />
            <Picker.Item label='환자' value='Patient' />
            <Picker.Item label='보호자' value='Guardian' />
            <Picker.Item label='의사/약사' value='Doctor/Chemist' />
            <Picker.Item label='다른질환' value='Other diseases' />
            <Picker.Item label='기타' value='Etc' />
          </Picker>
        </CardItem>
      </Card>
    );
  }
}
