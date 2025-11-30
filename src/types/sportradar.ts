// Sportradar API integration types

export interface EnsembleBreakdown {
  winner: string;
  final_confidence: number;
  conflict_detected: boolean;
  conflict_margin: number;
  votes: Record<string, number>;
  weights_used: Record<string, number>;
  scores: Record<string, number>;
}

export interface SportradarMatch {
  id: string;
  sport_event: {
    id: string;
    start_time: string;
    sport_event_context: {
      competition: {
        id: string;
        name: string;
      };
      stage: {
        order: number;
        type: string;
      };
      category: {
        id: string;
        name: string;
        country_code: string;
      };
      competitors: Array<{
        id: string;
        name: string;
        country: string;
        country_code: string;
        abbreviation: string;
        qualifier: string;
      }>;
    };
  };
  sport_event_status: {
    status: string;
    match_status: string;
    home_score: number;
    away_score: number;
    winner: string;
    period_scores: Array<{
      home_score: number;
      away_score: number;
      type: string;
      number: number;
    }>;
  };
  statistics: {
    teams: Array<{
      name: string;
      statistics: Record<string, number>;
    }>;
  };
}

export interface SportradarPrediction {
  match_id: string;
  predicted_winner: string;
  confidence: number;
  probability: {
    home_win: number;
    draw: number;
    away_win: number;
  };
  model_version: string;
  created_at: string;
}