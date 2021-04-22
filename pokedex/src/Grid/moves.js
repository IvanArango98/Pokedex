import React from 'react';
import { Row, Col, Button, Container} from 'react-bootstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory,{PaginationProvider, PaginationListStandalone, SizePerPageDropdownStandalone } from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

class GridMoves extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() {
        function Regresar()
        {
            window.location.href = "/pokedex";
        }
        const options = {
            custom: true,
            totalSize: this.props.rows.lenght            
        }; 
        return (
        <>              
        <Container className="Contenedor-Tabla">
            <hr></hr>
<ToolkitProvider
            keyField="tp"
            data={this.props.rows}
            columns={this.props.columns}
            search            
            >
                {
                    props => 
                 (
                    <>                                                                    
                        <PaginationProvider 
                            pagination={ paginationFactory(options) }
                    >
                        {
                        ({
                            paginationProps,
                            paginationTableProps
                        }) => (
                                <>    
                                <Row style={{width: "100%"}}   >
                                    <Col> 
                                    <SizePerPageDropdownStandalone
                                { ...paginationProps}                              
                                />
                                    </Col>
                                    <Col> 
                                    <SearchBar { ...props.searchProps}    /> 
                                    </Col>
                                </Row>

                                   <hr></hr>                                
                                <BootstrapTable
                                keyField="bt"
                                data={this.props.rows}
                                columns= { this.props.columns }
                                { ...paginationTableProps}    
                                { ...props.baseProps}                                                        
                                />                                                  
                                <PaginationListStandalone
                                { ...paginationProps}
                                />
                        </>
                         )
                        }                    
                    </PaginationProvider>                      
                    </>
    )
                }
                
            </ToolkitProvider>

            <Button id= "registro" variant="link"
                onClick={()=> Regresar()}
                > Regresar
                </Button>
                <hr></hr>
                <hr></hr>
            </Container>  
            </>
          );
    }
}
 
export default GridMoves;