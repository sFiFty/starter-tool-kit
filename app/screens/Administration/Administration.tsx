import * as React from 'react';
import { administrationApi } from 'services/administration';
import { Input } from 'components/Input';
import { Button } from 'components/Button';

export const Administration = (props) => {

  const [appName, setAppName] = React.useState(props.data.name);

  const onSetAppName = (event: React.SyntheticEvent) => {
    const target = event.target as HTMLInputElement;
    setAppName(target.value);
  }

  const onUpdateAppName = () => {
    administrationApi.updateAppConfiguration({
      name: appName
    })
  }
  console.log(props);
  return (
    <div>
      <div>
        <Input onChange={onSetAppName} value={appName} />
        <Button onClick={onUpdateAppName}>Update</Button>
      </div>
    </div>
  );
}
