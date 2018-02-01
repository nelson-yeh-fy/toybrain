import React, { Component } from 'react'
import faker from 'faker'
import _ from 'lodash'
import { Container, Input, Select, Button, Search } from 'semantic-ui-react'
import '../App.css';

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
    date: faker.date.past(),
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

    render() {
        const { isLoading, value, results } = this.state

        return (
            <Container textAlign='justified' fluid>
                <Input type='text' placeholder='Search...' action>                    
                    <Search
                        loading={isLoading}
                        onResultSelect={this.handleResultSelect}
                        onSearchChange={this.handleSearchChange}
                        results={results}
                        value={value}
                        {...this.props}
                    />
                    <Select compact options={state_options} defaultValue='NJ' />
                    <Select compact options={lic_options} defaultValue='PC' />
                    <input defaultValue='UZV66V' />
                    <Button type='submit'>Search</Button>
                </Input>
            </Container>
        )
    }
}

export default NcicMultiple;
