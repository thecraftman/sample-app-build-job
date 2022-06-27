const { ux, sdk } = require('@cto.ai/sdk');

async function main() {
  const prompt_res = await ux.prompt({
    type: 'input',
    name: 'repo',
    message: 'Which application do you want to deploy?',
  });

  // Add your workflow code
  const { stdout } = await sdk.exec('ls -asl');
  sdk.log(stdout);
  sdk.log('Here is how you can send logs');
  await ux.print(
    `🚀 ${prompt_res.repo}'s successful deployment has been recorded!`
  );

  const event = {
    event_name: 'deployment',
    event_action: 'succeeded',
    branch: 'main',
    repo: prompt_res.repo,
  };
  sdk.track([], event);
}
main();
