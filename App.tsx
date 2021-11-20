import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import AppleHealthKit, {
  HealthValue,
  HealthKitPermissions,
  HealthInputOptions,
} from 'react-native-health';

/* Permission options */
// const permissions = {
//   permissions: {
//     read: [AppleHealthKit.Constants.Permissions.HeartRate],
//     write: [AppleHealthKit.Constants.Permissions.Steps],
//   },
// } as HealthKitPermissions;

let permissions = {
  permissions: {
    read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex'],
    write: ['Weight', 'StepCount', 'BodyMassIndex'],
  },
} as HealthKitPermissions;

const App = () => {
  const [stepCount, setStepCount] = useState(0);
  const [date, setDate] = useState();

  // useEffect(() => {
  //   let options = {
  //     date: new Date().toISOString(), // optional; default now
  //     includeManuallyAdded: false, // optional: default true
  //   };
  //   setTimeout(() => {
  //     setDate(new Date());
  //     console.log('render');

  //     AppleHealthKit.getStepCount(
  //       options,
  //       (err: Object, results: HealthValue) => {
  //         if (err) {
  //           return console.error('shit');
  //         }
  //         console.log(results.value);
  //         setStepCount(results.value);
  //       },
  //     );
  //   }, 1000);
  // }, [date]);

  AppleHealthKit.initHealthKit(permissions, (error: string) => {
    /* Called after we receive a response from the system */

    if (error) {
      console.log('[ERROR] Cannot grant permissions!');
    }
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App</Text>
      <Text>hi</Text>
      <Text>{stepCount}</Text>
    </View>
  );
};

export default App;
