import { DatePicker, Form, Icon, Picker, Text } from 'native-base';
import * as React from 'react';
import { Platform } from 'react-native';
import { profileBodyStyles } from '../style';

export interface Props {
  reduxStore: any;
}
export interface State {
  selected: any;
  category: any;
}

export class ProfileBody extends React.Component<Props, State> {
  public state: State;
  public props: any;
  constructor(props: any) {
    super(props);
    this.state = {
      selected: '환자',
      category: ['환자', '보호자', '의사/약사', '다른질환', '기타'],
    };
  }

  setBirthDate(newDate: any) {
    this.props.reduxStore.changeProfileState('birthDate', newDate);
  }

  setRelation(value: string) {
    this.props.reduxStore.changeProfileState('relationship', value);
    this.setState({
      selected: value,
    });
  }

  render() {
    this.setRelation = this.setRelation.bind(this);
    this.setBirthDate = this.setBirthDate.bind(this);
    // 생년월일 뽑아내는 코드
    // const birthDay = this.state.chosenDate.toString().substr(4, 12);
    // console.log('profilbody.tsx 렌더');
    return (
      <Form>
        <Form style={profileBodyStyles.innerForm}>
          <Form>
            <Text>생년월일</Text>
          </Form>
          <Form style={profileBodyStyles.datePicker}>
            <DatePicker
              minimumDate={new Date(1900, 1, 1)}
              maximumDate={new Date()}
              locale={'en'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={true}
              animationType={'slide'}
              androidMode={'spinner'}
              placeHolderText='클릭하세요'
              onDateChange={this.setBirthDate}
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
              onValueChange={this.setRelation}
              textStyle={{ color: 'black' }}
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
