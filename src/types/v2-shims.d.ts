import '../v2/events/entities/event-checkpoint.entity';
import '../blockchain/state.service';

declare module '../v2/events/entities/event-checkpoint.entity' {
  interface EventCheckpoint {
    lastIndexedBlock?: string | number;
  }
}

declare module '../blockchain/state.service' {
  interface BlockchainStateService {
    getIndexerHealth(): Promise<any>;
    clearAllState(): Promise<any>;
    saveBlock(...args: any[]): Promise<any>;
    getPendingEvents(...args: any[]): Promise<any>;
    updateEventStatus(...args: any[]): Promise<any>;
    getOrphanedEvents(...args: any[]): Promise<any>;
    updateChainState(...args: any[]): Promise<any>;
    savePendingEvent(...args: any[]): Promise<any>;
    getEventsByBlock(...args: any[]): Promise<any>;
    getEvent(...args: any[]): Promise<any>;
    getReorgHistory(...args: any[]): Promise<any>;
    getCanonicalBlock(...args: any[]): Promise<any>;
    recordReorg(...args: any[]): Promise<any>;
  }
}
