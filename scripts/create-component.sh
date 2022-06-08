#!/bin/bash

home=./src

folder=$(find $home -maxdepth 1 -mindepth 1 -type d | fzf)


read component_name

storyText="
import { Meta, Story } from '@storybook/addon-docs/blocks';
import { $component_name } from './$component_name';

<Meta title=$component_name component={$component_name} />

# $component_name

export const Managed$component_name = (args) => <$component_name {...args}/>

<Story name=Default> { Managed$component_name.bind({}) }</Story>
"

componentText="
interface ${component_name}Props {

}

export const $component_name = ({
}: ${component_name}Props):JSX.Element => {
    return <></>
};
"


echo -e "$storyText" > $folder/$component_name.stories.mdx

echo -e "$componentText" > $folder/$component_name.tsx


echo -e "export { $component_name } from './$component_name'" >> $folder/index.ts
