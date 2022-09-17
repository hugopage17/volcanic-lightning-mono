import * as cdk from '@aws-cdk/core';
import { Rule, Schedule } from '@aws-cdk/aws-events';
import { defineLambda } from './lambda-construct';

export class VolcanicLightningCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lightningPollerLambda = defineLambda(
        this,
        'VolcanicLightningPoller',
        'lightning-poller',
        {
          GRAPHQL_ENDPOINT: 'https://rraxbw3hujhpvp5h7h2xoc73ye.appsync-api.ap-southeast-2.amazonaws.com/graphql',
          API_KEY: 'da2-y4nxlfmplzdwddovg2rhe7q4cy'
        },
    )

      // const rule = new Rule(this, 'ScheduleRule', {
      //   schedule: Schedule.cron({ minute: '5', hour: '4' })
      // });
    // The code that defines your stack goes here
  }
}
