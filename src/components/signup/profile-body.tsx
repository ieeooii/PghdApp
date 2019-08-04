import { DatePicker, Form, Icon, Picker, Text } from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import { profileBodyStyles } from '../style';

export interface Props {}
export interface State {
  chosenDate: any;
  selected: any;
  category: any;
}

export class ProfileBody extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      chosenDate: '생년월일을 선택하세요',
      selected: '클릭하세요',
      category: ['환자', '보호자', '의사/약사', '다른질환', '기타'],
    };
  }

  setDate(newDate: any) {
    this.setState({
      chosenDate: newDate,
    });
  }

  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }

  render() {
    this.onValueChange = this.onValueChange.bind(this);
    this.setDate = this.setDate.bind(this);
    // 생년월일 뽑아내는 코드
    // const birthDay = this.state.chosenDate.toString().substr(4, 12);

    return (
      <Form>
        <Form style={profileBodyStyles.innerForm}>
          <Form>
            <Text>생년월일</Text>
          </Form>
          <Form style={profileBodyStyles.datePicker}>
            <DatePicker
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={'korea'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={true}
              animationType={'slide'}
              androidMode={'spinner'}
              placeHolderText='클릭하세요'
              placeHolderTextStyle={{ color: 'blue' }}
              onDateChange={this.setDate}
              disabled={false}
            />
            {Platform.OS === 'ios' ? (
              <Icon
                style={profileBodyStyles.datePickerIcon}
                name='arrow-down'
              />
            ) : (
              <Icon
                style={profileBodyStyles.datePickerIcon}
                name='arrow-dropdown'
              />
            )}
          </Form>
        </Form>
        <Form style={profileBodyStyles.innerForm}>
          <Form>
            <Text>질환관계</Text>
          </Form>
          <Form style={profileBodyStyles.relationPickerForm}>
            <Picker
              style={profileBodyStyles.relationPicker}
              mode='dropdown'
              placeholder='클릭하세요'
              iosIcon={<Icon name='arrow-down' />}
              selectedValue={this.state.selected}
              textStyle={{ color: 'blue' }}
              onValueChange={this.onValueChange}
            >
              {this.state.category.map((val: any) => {
                return <Picker.Item label={val} value={val} key={val} />;
              })}
            </Picker>
          </Form>
        </Form>
      </Form>
    );
  }
}
