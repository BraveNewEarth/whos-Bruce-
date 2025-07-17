import { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  useReactFlow,
  ReactFlowProvider
} from 'reactflow';
import 'reactflow/dist/style.css';

import CustomNode from './CustomNode';
import { mindMapData } from '../data/mindMapData';

const nodeTypes = {
  central: CustomNode,
  category: CustomNode,
  detail: CustomNode
};

const MindMapFlow = ({ onNodeClick, selectedNodeId }) => {
  const [nodes, setNodes, onNodesChange] = useNodesState(mindMapData.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mindMapData.edges);
  const { fitView } = useReactFlow();
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  // Update node selection
  useEffect(() => {
    setNodes((nds) =>
      nds.map((node) => ({
        ...node,
        selected: node.id === selectedNodeId
      }))
    );
  }, [selectedNodeId, setNodes]);
  
  // Handle node clicks
  const handleNodeClick = useCallback((event, node) => {
    onNodeClick(node);
  }, [onNodeClick]);
  
  // Reset view function
  const resetView = useCallback(() => {
    fitView({ duration: 800 });
  }, [fitView]);
  
  // Expose resetView to parent
  useEffect(() => {
    window.mindMapResetView = resetView;
  }, [resetView]);
  
  return (
    <div className="w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={handleNodeClick}
        nodeTypes={nodeTypes}
        fitView
        attributionPosition="bottom-left"
        defaultEdgeOptions={{
          animated: true,
          style: { stroke: '#94a3b8', strokeWidth: 2 }
        }}
        connectionLineStyle={{ stroke: '#94a3b8', strokeWidth: 2 }}
        snapToGrid={true}
        snapGrid={[15, 15]}
      >
        <Controls 
          position="top-right"
          showInteractive={false}
        />
        <MiniMap 
          position="bottom-right"
          nodeColor={(node) => node.data.color}
          nodeStrokeWidth={3}
          zoomable
          pannable
        />
        <Background 
          variant="dots" 
          gap={20} 
          size={1}
          color="#e2e8f0"
        />
      </ReactFlow>
    </div>
  );
};

const MindMap = ({ onNodeClick, selectedNodeId }) => {
  return (
    <ReactFlowProvider>
      <MindMapFlow onNodeClick={onNodeClick} selectedNodeId={selectedNodeId} />
    </ReactFlowProvider>
  );
};

export default MindMap;

