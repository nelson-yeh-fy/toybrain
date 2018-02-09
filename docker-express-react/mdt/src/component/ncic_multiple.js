import React, { Component } from 'react'
import faker from 'faker'
import _ from 'lodash'
import { Container, Input, Select, Button, Search } from 'semantic-ui-react'
import '../assets/App.css';

const state_options = [
    { key: 'nj', text: 'NJ', value: 'NJ' },
    { key: 'pa', text: 'PA', value: 'PA' },
    { key: 'ny', text: 'NY', value: 'NY' },
]

const lic_options = [
    { key: 'all', text: 'All', value: 'all' },
    { key: 'pc', text: 'PC', value: 'PC' },
    { key: 'other', text: 'Other', value: 'other' },
]

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    date: faker.date.past('7'),
    address: faker.address.streetAddress(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))

class NcicMultiple extends Component {
    state = {
    }

    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 500)
    }

    handleButtonClick = (e, { result }) => this.setState({ query: 'saf' });

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Container textAlign='justified' fluid>
                <Search
                    loading={isLoading}
                    onResultSelect={(e, { result }) => this.setState({ value: result.title })}
                    onSearchChange={this.handleSearchChange}
                    results={results}
                    value={value}
                    {...this.props}
                />
                <Input type='text' placeholder='Search...' action>
                    <input defaultValue='UZV66V' />
                    <Select compact options={state_options} defaultValue='NJ' />
                    <Select compact options={lic_options} defaultValue='PC' />
                    <Button type='submit' onClick={this.handleButtonClick}>Search</Button>
                </Input>
                <Button size='mini' basic inverted>NCIC</Button>
                <Button size='mini' basic inverted>DMV</Button>
                <Button size='mini' basic inverted>NLETS</Button>
                <Button size='mini' basic inverted>AOC</Button>
                <Button size='mini' basic inverted>RMS</Button>
            </Container>
        )
    }
}

export default NcicMultiple;
