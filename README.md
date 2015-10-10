# jquery-selectutility

<h3>Retrieve machine-readable (database safe) value from Select node</h3>

  * <h5>Signatures</h5>

    - $(<i>select element</i>).<b>mrValue</b>();
    
    - $(<i>select element</i>).<b>mrValue</b>(<i>domAttributeWhereMachineReadableValueIsSaved</i>);
      
        - <i>domAttributeWhereMachineReadableValueIsSaved</i> defaults to 'data-value' if not specified as shown in the first signature
      
        - <code>$('select#test').mrValue('data-somecustomname');</code>
      
    - $(<i>select element</i>).<b>mrValue</b>(<i>domAttributeWhereMachineReadableValueIsSaved, humanReadableOptionText</i>);
      
        - If not specified, <i>humanReadableOptionText</i> will take its value from the option element currently selected
        - <code>$('select#test').mrValue('data-value', 'Something Below the Currently Selected Option');</code> 
  
  * <h5>Return Values</h5>
  
    - Returns <i>String</i> when a match is found. If not, <code>-1</code> is returned
    
<h3>Retrieve human-readable value from Select node based on machine-readable value</h3>

  * <h5>Signatures</h5>

    - $(<i>select element</i>).<b>hrValue</b>(<i>domAttributeWhereMachineReadableValueIsSaved, machineReadableText</i>);
    
      - <code>$('select#test').hrValue('data-value', 'value_from_db');</code>
      
  * <h5>Return Values</h5>
  
    - Returns <i>String</i> when a match is found. If not, <code>-1</code> is returned
